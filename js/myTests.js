test('lsd_calcpence', function () {
	equal(lsd_calcpence('4'), 4, 'single digit');
	equal(lsd_calcpence('85'), 85, 'double digit');
	equal(lsd_calcpence('187p'), 187, 'pence symbol');
	equal(lsd_calcpence('2p'), 2, 'pence symbol single digit');
	equal(lsd_calcpence('1.87'), 187, 'pence decimal');
	equal(lsd_calcpence('£1.23'), 123, 'pound symbol');
	equal(lsd_calcpence('£2'), 200, 'single digit pound symbol');
	equal(lsd_calcpence('£10'), 1000, 'double digit pound symbol');
	equal(lsd_calcpence('£1.87p'), 187, 'pound and pence symbol');
	equal(lsd_calcpence('£1p'), 100, 'missing pence');
	equal(lsd_calcpence('£1.p'), 100, 'missing pence but present decimal point');
	equal(lsd_calcpence('001.41p'), 141, 'buffered zeros');
	equal(lsd_calcpence('4.235p'), 424, 'rounding three decimal places to two');
	equal(lsd_calcpence('£1.257422457p'), 126, 'rounding with symbols');
	equal(lsd_calcpence(''), 0, 'empty string');
	equal(lsd_calcpence('1x'), 0, 'non-numeric character');
	equal(lsd_calcpence('£1x.0p'), 0, 'non-numeric character');
	equal(lsd_calcpence('£p'), 0, 'missing digits');
});

test('lsd_calccoins', function () {
	equal(lsd_calccoins(4), '2 x 2p', 'single digit');
	equal(lsd_calccoins(85), '1 x 50p, 1 x 20p, 1 x 10p, 1 x 5p', 'double digit');
	equal(lsd_calccoins(187), '1 x £1, 1 x 50p, 1 x 20p, 1 x 10p, 1 x 5p, 1 x 2p', 'pence symbol');
	equal(lsd_calccoins(2), '1 x 2p', 'pence symbol single digit');
	equal(lsd_calccoins(187), '1 x £1, 1 x 50p, 1 x 20p, 1 x 10p, 1 x 5p, 1 x 2p', 'pence decimal');
	equal(lsd_calccoins(123), '1 x £1, 1 x 20p, 1 x 2p, 1 x 1p', 'pound symbol');
	equal(lsd_calccoins(200), '2 x £1', 'single digit pound symbol');
	equal(lsd_calccoins(1000), '10 x £1', 'double digit pound symbol');
	equal(lsd_calccoins(187), '1 x £1, 1 x 50p, 1 x 20p, 1 x 10p, 1 x 5p, 1 x 2p', 'pound and pence symbol');
	equal(lsd_calccoins(100), '1 x £1', 'missing pence');
	equal(lsd_calccoins(100), '1 x £1', 'missing pence but present decimal point');
	equal(lsd_calccoins(141), '1 x £1, 2 x 20p, 1 x 1p', 'buffered zeros');
	equal(lsd_calccoins(424), '4 x £1, 1 x 20p, 2 x 2p', 'rounding three decimal places to two');
	equal(lsd_calccoins(126), '1 x £1, 1 x 20p, 1 x 5p, 1 x 1p', 'rounding with symbols');
	equal(lsd_calccoins(0), '', 'empty string');
});
