from unittest import TestCase

from roman import Roman


class TestRoman(TestCase):
    def setUp(self) -> None:
        self.roman = Roman()

    def test_should_decode_a_roman_number_into_integer(self):
        pass
