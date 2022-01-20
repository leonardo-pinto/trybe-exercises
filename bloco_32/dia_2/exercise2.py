# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada com as
# letras embaralhadas. O programa terá uma lista de palavras e
# escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra
#  deve
# ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
# Para embaralhar uma palavra faça: scrambled_word =
# "".join(random.sample(word, len(word)))
# O sorteio de uma palavra aleatória pode ser feito utilizando o
# método choice: random.choice(["word1", "word2", "word3"]) -> "word2"
import random


def draw_secret_word():
    words_list = ["Dinossauro", "Chocadeira", "Parede"]
    random_word = random.choice(words_list)
# A função join junta pelo caractere definido antes da função
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    return random_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(3):
        guess = input('Digite qual a palavra original: ')
        guesses.append(guess)
    return guesses


def check_game_result(random_word, guesses):
    if random_word in guesses:
        print('Parabéns, você acertou!!!')
    else:
        print('Que pena, você errou! Tente novamente')


if __name__ == "__main__":
    random_word, scrambled_word = draw_secret_word()
    print(f"A palavra é {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(random_word, guesses)
