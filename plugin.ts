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
      if (/Application\/helloChat/.test(window.navigator.userAgent)) {
        window.addEventListener('deviceready', ()=> {
          new Promise(function (resolve, reject) {
            const permissions = cordova.plugins?.permissions as Permissions ;
            const list = [
              permissions.CAMERA,
              permissions.CALL_PHONE,
              permissions.RECORD_AUDIO,
              permissions.MODIFY_AUDIO_SETTINGS,
              permissions.RECORD_AUDIO
            ];
            permissions.requestPermissions( list, function(status) {
              resolve(status)
            }, function () {
                reject()
            })
            }).then(function(status){
              console.log("")

            }).catch(function () {
              //获取权限失败！！！
              console.error('permission request fail')
            })
        }, false);
      }
      </script>`
    ])
    return $;
  });
};
