### CDN的部分-在实际操作中需要把两个文件放在Web程序的根目录，然后构造指令映射到根目录（目前没有实现）
#### flutter build web --release --no-tree-shake-icons --wasm

### 字体的部分-官方会下载一个字体，要想办法Hack它（目前没有实现）
    - family: Roboto
      fonts:
       - asset: assets/web/Roboto-Regular.ttf