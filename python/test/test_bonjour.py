from unittest import TestCase

from bonjour import Bonjour


class TestBonjour(TestCase):

    def setUp(self) -> None:
        self.bonjour = Bonjour()

    def test_should_say_hi(self):
        pass
