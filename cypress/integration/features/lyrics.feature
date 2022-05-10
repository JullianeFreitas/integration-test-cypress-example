Feature: Retrieve the lyrics of a song

Scenario Outline:: Should be returned the lyrics of the song requested
    Given the artist '<artist>'
    And the song '<song>'
    Then the lyrics must contain that part: '<part>'
    Examples:
      | artist          | song                    | part                                                         |
      | Coldplay        | Adventure of a Lifetime | Everything you want's a dream away                           |
      | Lauren Jauregui | Expectations            | All these tears that I've cried while I'm turned to the side |
      | Camila Cabello  | Consequences            | A steady place to let down my defenses                       |
      | Anitta          | Envolver                | Porque siempre que te veo tú me quiere' perrear (Oh, oh)     |

  Scenario Outline:: Should return an error message
    Given the artist '<artist>'
    And the song '<song>'
    Then the lyrics must not be found
    Examples:
      | artist       | song     |  |
      | Ludmilla     | Maldivas |  |
      | Pablo Vittar | Disk me  |  |

