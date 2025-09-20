## [1.1.8](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/compare/v1.1.7...v1.1.8) (2025-04-14)


### Bug Fixes

* add metadata.json to release zip ([305350d](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/commit/305350da76f10180459beed55f1f4f1475a29345))

## [1.1.7](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/compare/v1.1.6...v1.1.7) (2025-03-29)


### Bug Fixes

* don't provide name to logger ([4eb1288](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/commit/4eb1288345d3a2492963b1554a6a9ab4475b5bc4))
* send error and warning logs to backend ([59d9294](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/commit/59d9294381b58e378fad2a2bd255380286a4d303))

## [1.1.6](https://github.com/BossSloth/AugmentedSteam-Extension-Plugin/compare/v1.1.5...v1.1.6) (2025-03-17)

## [1.1.5](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.1.4...v1.1.5) (2025-02-16)


### Bug Fixes

* **#11:** Fix styles (tested now) and change banner styles to sit inline with content; prevent committing vscode settings; bun lock changes ([4f4472a](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/4f4472a846ebea542574d360c8c6b3d5b6c72c8a))
* **#13:** Early Access Game Banner breaks SteamDB achievement group images ([2a9f949](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/2a9f94978a7dffff31b2f9e33e46eb85ca23c89e)), closes [#13](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/issues/13)
* ci not being able to comment on issues ([e2e8b73](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/e2e8b739ab15e077735c8b922f3fb3926dfac43a))


### Reverts

* gitignore and bun lockfile ([d71f8a8](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/d71f8a83dfbf2b3842213c4d022ae00f4402595a))

## [1.1.4](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.1.3...v1.1.4) (2025-02-07)


### Performance Improvements

* exclude img and localization from build to make the build smaller ([f923520](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/f923520d498d454601bc9b2ea54dcbe90688bb00))

## [1.1.3](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.1.2...v1.1.3) (2025-01-29)


### Bug Fixes

* **#6:** Do better wait on mainDocument ([cab3883](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/cab3883a4b45f0610e21fc204723609a2d88bf12)), closes [#6](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/issues/6)

## [1.1.2](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.1.1...v1.1.2) (2025-01-23)


### Bug Fixes

* **#3,#7:** Do special fetch to get inventory or other pages that need credentials to get rid of not logged in banner, closes [#3](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/issues/3), [#7](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/issues/7) ([b00b9c7](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/b00b9c7ea64902827956c250681fb91b9e66da4f))
* **#6:** wait on main main window to be loaded ([2e18b5b](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/2e18b5be6ed1ec61671a0d47d4161743a97050c1)), closes [#6](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/issues/6)
* build sometimes not working ([142ae3b](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/142ae3ba73a41c39c2cfc1882efcb96dc2e1ad83))
* css not properly loading in on preferences page in prod mode ([0cd2902](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/0cd2902f1de31b9a01c9b2a8a9e214001e276e47))

## [1.1.1](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.1.0...v1.1.1) (2025-01-03)


### Bug Fixes

* AugmentedSteam build not installing dev dependencies ([784f231](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/784f231398af83b543140f0055b976572bc407e4))
* just fully remove unused react dependency to fix build ([cccdbe4](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/cccdbe4264285b6a2326c7c0b5e258ea3f527bcc))
* library info sometimes fully disappearing by now try catching it ([8f7e9bd](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/8f7e9bd548a197d07d70b8092667104ca6ac37c3))
* library info sometimes not loading in ([1dcd728](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/1dcd72859966e9608877bcaa889fd8eca212ae8a))
* library info sometimes not loading in ([0f699d5](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/0f699d50323b4b118e68b84dffd7752f5c38fa8d))

# [1.1.0](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/compare/v1.0.0...v1.1.0) (2025-01-01)


### Bug Fixes

* .releaserc ([b59d978](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/b59d978ba100b020b0eff0a5d3ce6d514b7e8de5))


### Features

* Show HLTB times in library game details ([6532b0d](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/6532b0d7e178e66b2b54603a7e0db42eb4014cc6))
* Show player count in library game details ([2a8d851](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/2a8d85166fbbebf40817bf40e7fe9e4d5b44f43e))

# 1.0.0 (2024-12-30)


### Bug Fixes

* build_zip ([34205cb](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/34205cbe7e5eaf297c87079284ca40f239732d0e))
* ci ([d529546](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/d5295467fc354295a3cfd736cf50f98fc6c8d900))
* ci ([bf8afdd](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/bf8afdd499eb62262cb783d493f1eda76b89d760))
* **ci:** include hidden files ([39dfc99](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/39dfc99e61d5eadbba20febd43e6f3016e139e05))
* **ci:** update build command ([bd3ffa6](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/bd3ffa6f198243da2d02d3657e1c5622c3ec94f3))
* **ci:** use bun to build ([d3e6f31](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/d3e6f3160b1d475e9c9eb1c9e880750166933acd))
* make sure steamdb links are only opened once ([b760324](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/b7603244d9239e7140af297afc792111780979a5))
* turn of dev and fix prod build issues ([98870d8](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/98870d88bd1732ca6aa58a59b7a68ddd18d95d50))


### Features

* add preferences menu ([5f099dc](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/5f099dc4b252e10278c05cbd15aee0fae885bfe8))
* open links in external browser or popup ([d36ff58](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/d36ff58b4798219f4ee0d1ec32e525ad1f419787))


### Performance Improvements

* improved performance a lot & fixed a bunch of bugs & made plugin more cross compatible by not overriding chrome ([06833d5](https://github.com/tddebart/AugmentedSteam-Extension-Plugin/commit/06833d50426ff14751543d7cb2b441c0f2c5fc95))
