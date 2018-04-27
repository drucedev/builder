import React from 'react';

export const component = (component, props, ...inner) => React.createElement(component, props, ...inner);

export const div = (props, ...inner) => component('div', props, inner);
export const form = (props, ...inner) => component('form', props, inner);
export const textarea = (props) => component('textarea', props);
export const button = (props, ...inner) => component('button', props, inner);
export const li = (props, ...inner) => component('li', props, inner);
export const ul = (props, ...inner) => component('ul', props, inner);
export const section = (props, ...inner) => component('section', props, inner);
export const a = (props, ...inner) => component('a', props, inner);
export const input = (props) => component('input', props);
export const label = (props, ...inner) => component('label', props, inner);
export const nav = (props, ...inner) => component('nav', props, inner);
export const i = (props, ...inner) => component('i', props, inner);
export const span = (props, ...inner) => component('span', props, inner);
export const b = (props, ...inner) => component('b', props, inner);
export const h1 = (props, ...inner) => component('h1', props, inner);
export const h2 = (props, ...inner) => component('h2', props, inner);
export const h3 = (props, ...inner) => component('h3', props, inner);
export const h4 = (props, ...inner) => component('h4', props, inner);
export const p = (props, ...inner) => component('p', props, inner);
export const table = (props, ...inner) => component('table', props, inner);
export const thead = (props, ...inner) => component('thead', props, inner);
export const tbody = (props, ...inner) => component('tbody', props, inner);
export const tr = (props, ...inner) => component('tr', props, inner);
export const td = (props, ...inner) => component('td', props, inner);
export const th = (props, ...inner) => component('th', props, inner);
