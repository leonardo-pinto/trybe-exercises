import pytest
from exercise2 import expression_to_number

def test_abc_should_be_converted_to_2():
    assert expression_to_number("ACB") == "222"


def test_def_should_be_converted_to_3():
    assert expression_to_number("DEF") == "333"


def test_ghi_should_be_converted_to_4():
    assert expression_to_number("GHI") == "444"


def test_jkl_should_be_converted_to_5():
    assert expression_to_number("JKL") == "555"


def test_mno_should_be_converted_to_6():
    assert expression_to_number("MNO") == "666"


def test_pqrs_should_be_converted_to_7():
    assert expression_to_number("PQRS") == "7777"


def test_tuv_should_be_converted_to_8():
    assert expression_to_number("TUV") == "888"


def test_wxyz_should_be_converted_to_9():
    assert expression_to_number("WXYZ") == "9999"


def test_dash_zero_one_space_should_keep():
    assert expression_to_number(" -10") == " -10"


def test_at_least_one_char():
    with pytest.raises(ValueError):
      assert expression_to_number("")


def test_invalid_characters():
    with pytest.raises(ValueError):
        assert expression_to_number("*&$$&$&")