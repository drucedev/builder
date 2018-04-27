import {div, h4, table, tbody, td, th, thead, tr, p} from "../../elements";
import React from 'react';

export default class FaqPage extends React.Component {
  render() {
    return div({className: 'container'},
      h4({}, 'Горячие клавиши редактора запросов'),
      table({className: 'table'},
        thead({},
          tr({},
            th({}, 'Сочетание клавиш'),
            th({}, 'Описание')
          )
        ),
        tbody({},
          tr({},
            td({}, 'Ctrl + Enter'),
            td({}, 'Включить полноэкранный режим'),
          ),
          tr({},
            td({}, 'Ctrl + F'),
            td({}, 'Поиск по тексту'),
          ),
          tr({},
            td({}, 'Ctrl + Alt + L'),
            td({}, 'Отформатировать текст'),
          ),
        )
      )
    )
  }
}
