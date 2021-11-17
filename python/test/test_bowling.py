from unittest import TestCase

from bowling import Bowling


class TestBowling(TestCase):

    def setUp(self) -> None:
        self.bowling = Bowling()

    def test_should_implement_the_bowling_game_rules(self):
        pass
