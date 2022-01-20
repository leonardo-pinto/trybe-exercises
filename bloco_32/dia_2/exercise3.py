# Exercício 3: Modifique o exercício anterior para que as palavras sejam
# lidas de um arquivo. Considere que o arquivoterá cada palavra em uma linha.
import random


def retrieve_words(file):
    file = open("exercise3_words.txt", mode="r").readlines()
    return [word.strip() for word in file]


def draw_secret_word(words_list):
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
    with open("exercise4_words.txt", "r") as file:
        words_list = retrieve_words(file)
    random_word, scrambled_word = draw_secret_word(words_list)
    print(f"A palavra é {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(random_word, guesses)
