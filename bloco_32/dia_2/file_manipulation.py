# escrita
file = open("file_example.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("file_example.txt", mode="r")
content = file.read()
print(content)
file.close()
