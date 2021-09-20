Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
arredonde para baixo o valor da idade;
calcule a idade usando a diferença entre a data corrente e a data de nascimento;
1 dia é igual a 86400000 milissegundos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  }
]).pretty();

Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: { $gte: 18, $lte: 25 }
    }
  },
  {
    $count: 'totalClientes',
  }
]).pretty();

Exercício 3 : Remova os estágios $count e $match do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    }
  }
]).pretty();

Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'), 
      }
    }
  }
]).pretty();


Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método itcount() . Até aqui, você deve ter 486 documentos sendo retornados.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'), 
      }
    }
  }
]).itcount();


Exercício 6 : Ainda nesse pipeline , descubra os 5 estados com mais compras.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [
            { $subtract: [new Date(), "$dataNascimento"] },
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras',
    }
  },
  {
    $match: {
      "compras.dataVenda": {
        $gte: ISODate('2019-06-01'),
        $lte: ISODate('2020-03-31'), 
      }
    }
  },
  {
    $sort: {

    }
  }
]).pretty();

Exercício 8 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .

db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate('2020-03-01'),
        $lte: ISODate('2020-03-31')
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: [
          '$dataVenda', 3 * 24 * 60 * 60000
        ]
      }
    }
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1,
    }
  },
  {
    $group: {
      _id: null,
      maxDataEntrega: {
        $max: "$dataEntregaPrevista"
      },
      minDataEntrega: {
        $min: "$dataEntregaPrevista"
      }
    }
  },
  {
    $project: {
      _id: 0,
      diasDiferenca: {
        $ceil: {
          $abs: {
            $divide: ["$maxDataEntrega", "minDataEntrega"],
            86400000
          },
        }
      }
    }
  }
]).pretty();
