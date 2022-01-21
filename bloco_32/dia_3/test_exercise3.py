import pytest
from exercise3 import validate_email

def test_username_should_start_with_letter():
    assert validate_email("leonardo@email.com") is None


def test_username_should_contain_letter_digits_dashes_or_underscore():
    assert validate_email("le-1o_nardo@email.com") is None


def test_website_should_contain_letter_and_digits():
    assert validate_email("leonardo@em41l.com") is None


def test_extension_should_contain_maximum_three_digits():
    assert validate_email("leonardo@em4il.com") is None


def test_userame_invalid_raises_exception():
    with pytest.raises(ValueError):
        validate_email("423$%$#@website.com")


def test_website_invalid_raises_exception():
    with pytest.raises(ValueError):
        validate_email("leonardo@#$&.com")


def test_extension_invalid_raises_exception():
    with pytest.raises(ValueError):
        validate_email("leonardo@website.commmm")