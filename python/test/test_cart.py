from unittest import TestCase

from cart import Cart


class TestCart(TestCase):

    def setUp(self) -> None:
        self.cart = Cart()

    def test_should_implement_business_rules(self):
        pass
