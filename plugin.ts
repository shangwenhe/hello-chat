import { IApi } from "@umijs/max"

export default (api: IApi) => {
  api.addHTMLMetas(()=>{
    return [{
      name: 'viewport',
      content: 'initial-scale=1.0, user-scalable=no'
    }]
  })
  api.modifyHTML(($) => {
    $('head').append([
      `<script>
      document.addEventListener('deviceready', () => {
        console.log('event::deviceready')
      })
      </script>`
    ])
    return $;
  });
};
