// 1, 4, 6, foo2, 3, 2, 5, foo2, foo2, foo2, ...
// Браузер не зависнет, так как все события в браузере тоже являются макрозадачами
// и будут переключаться между setTimeout и клиентскими событиями