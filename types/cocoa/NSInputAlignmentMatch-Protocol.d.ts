/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInputAlignmentMatchProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    alignmentGuide<R = NSInputAlignmentGuide>(): R;
    itemRepresentativeGuide<R = NSInputAlignmentGuide>(): R;
    item<R = NSInputAlignmentItem>(): R;
  }
  namespace NSInputAlignmentMatchProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
