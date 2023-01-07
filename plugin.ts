import { IApi } from "@umijs/max"

export default (api: IApi) => {
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
