# Prototype

Prototype is an easy and flexible setup tool.

## Goal of the project

If you think that setting up new typescript project is painful
(like typescript monorepo or React projects) then
**Prototype** is the project made for you.
The idea is to build a tool taking care of all the lazy and
painful first install setup and configurations files required
and **let you focus on your code**.

A first aspect is an automatic generation of the configuration files.
You should set a prototype configuration file, that will generate any
required configuration file (`package.json`, `tsconfig.json`, webpack configuration, etc.). The mains problems to resolve are: alias managment
and specific configuration for some environnement (sometime, the dev
and build configuration is different and not easily done by default)

A second aspect is to try to implement an _image_
system (like Docker images if you are familiar with it) allowing
to setting up base files and packages. In the perfect work, each
image can inherit from another image and then add or remove packages
or files from it.

## Local installation (for testing) with Yarn

```shell
yarn global add file:<full path to the project directory>
```

See [Yarn documentation](https://classic.yarnpkg.com/en/docs/cli/add/)
