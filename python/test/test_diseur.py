from unittest import TestCase

from diseur import Diseur


class TestDiseur(TestCase):

    def setUp(self) -> None:
        self.diseur = Diseur()

    def test_should_implement_business_rules(self):
        pass
