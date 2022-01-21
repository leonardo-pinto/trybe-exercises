from exercise3 import validate_email


def check_email_array(email_array):
    valid_emails = []
    for email in email_array:
        try:
            validate_email(email)
        except ValueError as exc:
            print(exc)
        else:
          valid_emails.append(email)

    
    return valid_emails