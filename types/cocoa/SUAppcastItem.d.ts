/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SUAppcastItem<T0 = void, T1 = void, T2 = void> {
    // + SUAppcastItem(MSAssetLibraryUpdater):
    downloadFileSize<R = number>(): R;
  }
  namespace SUAppcastItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}

declare const SUAppcastItem: cocoa.SUAppcastItem.CLASS;
