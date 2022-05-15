# http://BetoVega67.github.io
Trabalho de Faculdade

Jose Alberto Vega

Comando para instalar o mysql
# yum -y install mysql-server mysql

Quando a instalação finalizar, você deverá inicializar o serviço e definir a senha de root:
# service mysqld start
# mysqladmin -u root password ‘becafe00’

Para fazer com que o MySQL seja inicializado automaticamente no boot:
# chkconfig –levels 2345 mysqld on
