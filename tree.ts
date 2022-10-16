import { strictEqual } from 'assert';

enum NodeType {
  Add = '+',
  Subtract = '-',
  Multiply = 'x',
  Divide = '÷',
  Value = '',
}

abstract class Node<T> {
  abstract operator: NodeType;
  left: T;
  right: T;
  value?: number;
  abstract result(): number;

  constructor(left: T, right: T, value?: number) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  toString(): string {
    if (this.operator === NodeType.Value) {
      return this.value?.toString() ?? '';
    } 

    return `(${this.left} ${this.operator} ${this.right})`;
  }
}

export class AddNode extends Node<Node<any>> {
  operator = NodeType.Add;

  result(): number {
    return this.left.result() + this.right.result();
  }
}

export class SubtractNode extends Node<Node<any>> {
  operator = NodeType.Subtract;

  result(): number {
    return this.left.result() - this.right.result();
  }
}

export class MultiplyNode extends Node<Node<any>> {
  operator = NodeType.Multiply;
  
  result(): number {
    return this.left.result() * this.right.result();
  }
}

export class DivideNode extends Node<Node<any>> {
  operator = NodeType.Divide;
  
  result(): number {
    return this.left.result() / this.right.result();
  }
}

export class ValueNode extends Node<undefined> {
  operator = NodeType.Value;

  constructor(value: number) {
    super(undefined, undefined, value);
  }

  result(): number {
    return this.value || 0;
  }
}

const tree = new DivideNode(
  new AddNode(
    new ValueNode(7),
    new MultiplyNode(
      new SubtractNode(
        new ValueNode(3),
        new ValueNode(2),
      ),
      new ValueNode(5),
    ),
  ),
  new ValueNode(6),
)

// I guess no separate tests if I'm not allowed to move these?

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());