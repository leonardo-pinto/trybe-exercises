Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$cliente", "$from"],
            },
          },
        },
      ],
      as: "operacoes",
    },
  },
]).pretty();

Selecione os quatro primeiros clientes com as suas respectivas transações recebidas ordenados pelo estado em ordem alfabética;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$cliente", "to"],
            }
          }
        }
      ],
      as: "operacoes",
    }
  },
  {
    $sort: { State: 1 },
  },
  {
    $limit: 4
  },
]);

Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      let: { cliente: "$name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$$cliente", "$to"],
            },
          },
        },
      ],
      as: "operacoes",
    },
  },
]).pretty();

Calcule qual o custo total de cada produto, considerando o preço de compra e os impostos.

db.products.aggregate([
  {
    $project: { _id: 0, name:1, total_cost: { $add: ["$purchase_price", "$taxes"] } }
  }
]).pretty();

Calcule qual o lucro total de cada produto, considerando o preço de compra, os impostos e seu valor de venda.

db.products.aggregate([
  {
    $project: 
    { _id: 0, name:1, total_cost: { $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }] } 
    }
  }
]).pretty();

Retorne o menor número inteiro relativo ao preço de venda de cada produto;

db.products.aggregate([
  {
    $project: { _id: 0, name:1, floor_sale_price: { $floor: "$sale_price" } }
  }
]).pretty();

Retorne o maior número inteiro relativo ao lucro total sobre cada produto. Nota: Desconsiderar taxas (taxes)

db.products.aggregate([
  {
    $project: 
    { _id: 0, name:1, ceil_total_cost: { $ceil: { $subtract: ["$sale_price", "$purchase_price"] } } 
    }
  }
]).pretty();

Calcule o valor absoluto do lucro total de cada produto.

db.products.aggregate([
  {
    $project: 
    { 
      _id: 0,
      name:1,
      total_profit: 
        { $abs: { $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] } ] } } }
    }
]).pretty();

Calcule qual o valor total em estoque de cada produto, considerando o preço de venda e a quantidade;
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      stock_cost: {
        $multiply: ["$quantity", "$sale_price"]
      }
    }
  }
])

Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total_profit: {
        $multiply: [
          "$quantity", {
          $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] } ]
        }]
      }
    }
  }
]).pretty();


Calcule qual será o preço de venda de cada produto caso haja uma promoção de 50% de desconto.
db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      stock_cost: {
        $divide: ["$sale_price", 2]
      }
    }
  }
])

Calcule o valor total do estoque, considerando que cada produto valha o mesmo que seu preço de venda. Lembre-se da quantidade.

db.products.aggregate([
  {
    $addFields: {
      valor_total_estoque: {
        $multiply: ["$quantity", "sale_price"]
      }
    }
  }
])