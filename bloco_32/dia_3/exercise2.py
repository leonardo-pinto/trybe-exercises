def expression_to_number(expression):
    if not 1 < len(expression) <= 30:
        raise ValueError("expression with invalid length")
    number = ""
    for char in expression:
        if char in "ABC":
            number += "2"
        elif char in "DEF":
            number += "3"
        elif char in "GHI":
            number += "4"    
        elif char in "JKL":
            number += "5"
        elif char in "MNO":
            number += "6"
        elif char in "PQRS":
            number += "7"
        elif char in "TUV":
            number += "8"
        elif char in "WXYZ":
            number += "9"
        elif char in "-10 ":
            number += char
    
        else:
            raise ValueError("Invalid character")
    return number


if __name__ == "__main__":
    print(expression_to_number('MY LOVE')) 