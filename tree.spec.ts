import { expect } from 'chai';
import {
  AddNode,
  SubtractNode,
  MultiplyNode,
  DivideNode,
  ValueNode,
} from './tree';

// all classes should be in separate files, tests too
// the task mentioned a single file so I'm not changing that
// in case some automation is run on the solution

describe('tree', () => {
  describe('ValueNode', () => {
    it('returns the value as the result', () => {
      const node = new ValueNode(3)

      expect(node.result()).to.equal(3);
    });

    it('converts to string correctly', () => {
      const node = new ValueNode(100);

      expect(node.toString()).to.equal('100');
    });
  });

  describe('AddNode', () => {
    it('adds correctly', () => {
      const node = new AddNode(new ValueNode(1), new ValueNode(1));

      expect(node.result()).to.equal(2);
    });

    it('converts to string correctly', () => {
      const node = new AddNode(new ValueNode(1), new ValueNode(3));

      expect(node.toString()).to.equal('(1 + 3)');
    });
  });

  describe('SubtractNode', () => {
    it('subtracts correctly', () => {
      const node = new SubtractNode(new ValueNode(1), new ValueNode(3));

      expect(node.result()).to.equal(-2);
    });

    it('converts to string correctly', () => {
      const node = new SubtractNode(new ValueNode(5), new ValueNode(3));

      expect(node.toString()).to.equal('(5 - 3)');
    });
  });

  describe('MultiplyNode', () => {
    it('multiplies correctly', () => {
      const node = new MultiplyNode(new ValueNode(4), new ValueNode(5));

      expect(node.result()).to.equal(20);
    });

    it('converts to string correctly', () => {
      const node = new MultiplyNode(new ValueNode(5), new ValueNode(123));

      expect(node.toString()).to.equal('(5 x 123)');
    });
  });

  describe('DivideNode', () => {
    it('divides correctly', () => {
      const node = new DivideNode(new ValueNode(6), new ValueNode(3));

      expect(node.result()).to.equal(2);
    });

    it('converts to string correctly', () => {
      const node = new DivideNode(new ValueNode(7), new ValueNode(5));

      expect(node.toString()).to.equal('(7 ÷ 5)');
    });
  });
});