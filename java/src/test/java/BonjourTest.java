import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class BonjourTest {
    Bonjour bonjour;

    @BeforeEach
    void beforeEach() {
        bonjour = new Bonjour();
    }

    @Test
    void shouldSayId() {}
}