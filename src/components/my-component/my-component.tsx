import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The last name
   */
  @Prop() last: string;

  render() {
    return <div>Hello, World! I'm {this.first} {this.last}</div>;
  }
}
