import pytest
from exercise4 import check_email_array


def test_only_valid_emails():
    emails = ["teste@teste.com"]
    expected_emails = ["teste@teste.com"]
    assert check_email_array(emails) == expected_emails


def test_invalid_emails_empty():
    emails = ["53gdhj#@email.comm"]
    expected_emails = []
    assert check_email_array(emails) == expected_emails


def test_valid_and_invalid_emails():
    emails = ["teste@teste.com", "53gdhj#@email.comm"]
    expected_emails = ["teste@teste.com"]
    assert check_email_array(emails) == expected_emails