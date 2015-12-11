# FrontEnd challenge v1

---

The task
--------

You're asked to create a tested, maintainable and production ready
[Pokémon Encyclopedia](http://www.pokemon.com/uk/pokedex/) using
the APIs provided by [pokéapi](http://pokeapi.co).

Feel free to use whatever preprocessor, framework, pattern you prefer
to create the Pokédex exactly as you see in the designs we provided.
Please put attention on every detail and develop it considering that
it will be one of the many components of a bigger application.
This is why we ask you to consider potentials side-effects (between
components, etc.) during the development.

### Design
https://drive.google.com/open?id=0B3cKl_MrnKolRldOQ3JkdnROOEU

#### Acceptance criteria
- A 4x4 grid is loaded with 16 Pokémon
- Every Pokémon in that grid shows its own ID, name and types
- Clicking on the "Load more Pokémon" button a new 4x4 grid is loaded
- When clicked, the button disappears and the infinite scrolling is enabled
- When a Pokémon is clicked, the single Pokémon page is opened displaying:
  - artwork (feel free to use the following links to fetch the images
      by replacing the corresponding Pokémon's ID: [large][1], [small][2]
  - ID
  - name
  - types
  - weight and height
  - description (each game has a different description, so please pick the
    latest available one)
  - abilities
  - statistics (based on a scale of 100)
  - moves

[1]: https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
[2]: https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png

### Release infos

Source code of the application has to be delivered in form of
a private git repository to which you should have or will receive
access shortly.

Please provide also a README file describing:
* implementation details
* what preprocessors, frameworks it used and why (if they've been used)
* possible ways of improving the application

Contain the following **executables**:
* `bin/setup` - for installing the dependencies and other setup
related tasks
* `bin/start` - for starting the web application on a port given
through the ENV variable PORT or defaulting to a default one (if needed)
* `bin/test` - for running the test suite (if you made it)

The completed version of the code should be marked with a git tag `v1.0.0`

If you're not able to deliver the challenge completed in every part, feel free
to release at least the index.
Developing the whole challenge it's pretty time consuming after all :)


Have fun!


License
-------

Copyright © 2015 Honeypot GmbH. All rights reserved.


About Honeypot
--------------

![Honeypot](https://www.honeypot.io/logo.png)

Honeypot is a developer focused job platform.
The names and logos for Honeypot are trademarks of Honeypot GmbH.
