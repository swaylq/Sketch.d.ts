/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarItemTreeBuilder<T0 = void, T1 = void, T2 = void> extends NSObject {
    _expandItem_itemCenteredNode<R = unknown, P0 = unknown, P1 = unknown>(__expandItem: P0, _itemCenteredNode: P1): R;
    _expandBarChildren_inNode_centeredNode<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__expandBarChildren: P0, _inNode: P1, _centeredNode: P2): R;
    _expandResponderBarAtIndex_centerNode<R = unknown, P0 = number, P1 = unknown>(__expandResponderBarAtIndex: P0, _centerNode: P1): R;
    _performWithResponderBarIndex_usingBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(__performWithResponderBarIndex: P0, _usingBlock: P1): R;
    _expandNextResponderBarWithCenterNode<R = unknown, P0 = unknown>(__expandNextResponderBarWithCenterNode: P0): R;
    dealloc<R = void>(): R;
    initWithTouchBars<R = unknown, P0 = unknown>(_initWithTouchBars: P0): R;
    requireUniqueItemIdentifiers<R = boolean>(): R;
    setRequireUniqueItemIdentifiers<R = void, P0 = boolean>(_v: P0): R;
    itemsMap<R = CDUnknownBlockType>(): R;
    setItemsMap<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    itemTree<R = NSTouchBarItemTree>(): R;
  }
  namespace _NSTouchBarItemTreeBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarItemTreeBuilder>(): R;
      new: <R = _NSTouchBarItemTreeBuilder>() => R;
    }
  }
}
