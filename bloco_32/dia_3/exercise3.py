def validate_email(email):
    index = 0
    ## o nome de usuário deve iniciar com letra
    if not email[0].isalpha():
      raise ValueError("Username should start with a letter!")

    ## o nome de usuário deve contar somente letras, dígitos, traços e underscores
    while email[index] != '@' and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
          raise ValueError("Username should contain only letters, digits, dashes or underscores!!!")
        index += 1

    index += 1
    while email[index] != "." and index < len(email):
        letter = email[index]
        if (
          not letter.isalpha()
          and not letter.isdigit()
        ):
          raise ValueError("Web site should contain only letter, and digits!!!")
        index += 1

    index += 1
    if len(email) - index > 3:
        print(len(email))
        print(index)
        raise ValueError("Extension maximum length is 3")
    return None


print(validate_email("nomeusuario@nomewebsite.ex"))
