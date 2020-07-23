import {
	Numbers,
	OperationAdd,
	OperationCalc,
	OperationMultiply,
	OperationMinus,
	OperationDivide,
} from 'config/NumberPadLayout';
import * as MathHelper from '../MathHelper';

type CalcTestCase = {
	args: (string | NumberPadItem)[];
	expect: string;
};

describe('Test check operation in expression', () => {
	const testCases: { exp: string; expect: boolean }[] = [
		{ exp: '123.456', expect: false },
		{ exp: '123456', expect: false },
		{ exp: '12+34.5', expect: true },
		{ exp: '12*55555', expect: true },
		{ exp: '12.2/22', expect: true },
		{ exp: '99-99', expect: true },
	];
	testCases.forEach((c) => {
		test(c.exp, () => {
			expect(MathHelper.haveOperation(c.exp)).toBe(c.expect);
		});
	});
});

describe('Test add NumberPadItem', () => {
	const allTestCases: { name: string; testCases: CalcTestCase[] }[] = [
		{
			name: 'Press 9,0,+,1,=',
			testCases: [
				{ args: ['', Numbers[9]], expect: '9' },
				{ args: ['9', Numbers[0]], expect: '90' },
				{ args: ['90', OperationAdd], expect: '90+' },
				{ args: ['90+', Numbers[1]], expect: '90+1' },
				{ args: ['90+1', OperationCalc], expect: '91' },
			],
		},
		{
			name: 'Press 1,2,*,2,+,6,=',
			testCases: [
				{ args: ['', Numbers[1]], expect: '1' },
				{ args: ['1', Numbers[2]], expect: '12' },
				{ args: ['12', OperationMultiply], expect: '12*' },
				{ args: ['12*', Numbers[2]], expect: '12*2' },
				{ args: ['12*2', OperationAdd], expect: '24+' },
				{ args: ['24+', Numbers[6]], expect: '24+6' },
				{ args: ['24+6', OperationCalc], expect: '30' },
			],
		},
		{
			name: 'Press 1,2,0,-,2,0,*,3,/,9,+,9,*,0,=',
			testCases: [
				{ args: ['', Numbers[1]], expect: '1' },
				{ args: ['1', Numbers[2]], expect: '12' },
				{ args: ['12', Numbers[0]], expect: '120' },
				{ args: ['120', OperationMinus], expect: '120-' },
				{ args: ['120-', Numbers[2]], expect: '120-2' },
				{ args: ['120-2', Numbers[0]], expect: '120-20' },
				{ args: ['120-20', OperationMultiply], expect: '100*' },
				{ args: ['100*', Numbers[3]], expect: '100*3' },
				{ args: ['100*3', OperationDivide], expect: '300/' },
				{ args: ['300/', Numbers[9]], expect: '300/9' },
				{ args: ['300/9', OperationAdd], expect: '33.3333+' },
				{ args: ['33.3333+', Numbers[9]], expect: '33.3333+9' },
				{ args: ['33.3333+9', OperationMultiply], expect: '42.3333*' },
				{ args: ['42.3333*', Numbers[0]], expect: '42.3333*0' },
				{ args: ['42.3333*0', OperationCalc], expect: '0' },
			],
		},
		{
			name: 'Press 1,2,/,0,=,1,2,/,0,1,2,*,2,=',
			testCases: [
				{ args: ['', Numbers[1]], expect: '1' },
				{ args: ['1', Numbers[2]], expect: '12' },
				{ args: ['12', OperationDivide], expect: '12/' },
				{ args: ['12/', Numbers[0]], expect: '12/0' },
				{ args: ['12/0', OperationCalc], expect: 'error' },
				{ args: ['error', Numbers[1]], expect: '1' },
				{ args: ['1', Numbers[2]], expect: '12' },
				{ args: ['12', OperationDivide], expect: '12/' },
				{ args: ['12/', Numbers[0]], expect: '12/0' },
				{ args: ['12/0', Numbers[1]], expect: '12/01' },
				{ args: ['12/01', Numbers[2]], expect: '12/012' },
				{ args: ['12/012', OperationMultiply], expect: '1*' },
				{ args: ['1*', Numbers[2]], expect: '1*2' },
				{ args: ['1*2', OperationCalc], expect: '2' },
			],
		},
	];

	allTestCases.forEach((a) => {
		test(a.name, () => {
			a.testCases.forEach((c) => {
				expect(MathHelper.addItemToExpression(c.args[0], c.args[1])).toBe(
					c.expect,
				);
			});
		});
	});
});

describe('Test display only last number in expression', () => {
	const testCases: { arg: string; expect: string }[] = [
		{ arg: '123', expect: '123' },
		{ arg: '123.2222', expect: '123.2222' },
		{ arg: '123.22+', expect: '123.22' },
		{ arg: '123.22+100', expect: '100' },
		{ arg: '123.22/0999', expect: '999' },
		{ arg: '123.22*099.99', expect: '99.99' },
	];
	testCases.forEach((t) => {
		test(t.arg, () => {
			expect(MathHelper.numberToDisplay(t.arg)).toBe(t.expect);
		});
	});
});
