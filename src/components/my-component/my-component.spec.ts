import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('Close button component', () => {
  let page;

  beforeEach(async ()=>{
    page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Ryan" last="Cooper"></my-component>`,
      supportsShadowDom: true,
    });
  });

  it('should render html content', () => {
    const element = page.root.shadowRoot.querySelector('div');
    expect(element).toEqualHtml(`<div>Hello, World! I'm Ryan Cooper</div>`);
  });

});
