Building
========

Backend
-------

None of the Python backend is compiled. So there is no build step.

Since we are using type annotations, you may perform "linting" of sorts with `mypy <http://mypy-lang.org/>`_.

Frontend
--------

From the **ui** directory inside the repository, there are several **npm run** scripts/commands that you can use in
each stage of development.

If you are working on live changes and want to see the results immediately, you can run::

    $ npm start

This starts a `webpack-dev-server <https://github.com/webpack/webpack-dev-server>`_, listening on ``localhost:4000`` by default.

When flask is run with the setting ``DEBUG=True``, the javascript code is loaded from this webpack dev server on localhost.

Documentation
-------------

The documentation is built using `Sphinx <http://www.sphinx-doc.org/>`_.

Sphinx, it's extensions, and the documentation theme are included in the **pipenv** developer dependencies.

If you have installed the dependencies using **pipenv** you may run::

	$ pipenv run make html

from the :file:`doc/` directory in order to build the documentation.
