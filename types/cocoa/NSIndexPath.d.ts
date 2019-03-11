/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIndexPath<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol, cocoa.NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    indexPathByAddingIndex<R = unknown, P0 = number>(_indexPathByAddingIndex: P0): R;
    indexPathByRemovingLastIndex<R = unknown>(): R;
    getIndexes<R = void, P0 = number>(_getIndexes: P0): R;
    getIndexes_range<R = void, P0 = number, P1 = cocoa._NSRange>(_getIndexes: P0, _range: P1): R;
    indexAtPosition<R = number, P0 = number>(_indexAtPosition: P0): R;
    dealloc<R = void>(): R;
    initWithIndexes_length<R = unknown, P0 = number, P1 = number>(_initWithIndexes: P0, _length: P1): R;
    initWithIndex<R = unknown, P0 = number>(_initWithIndex: P0): R;
    length<R = number>(): R;
    // + NSIndexPath(NSBrowserIndexPath,NSIndexPathPrivateUtilities,MSShapeHandles):
    _safeIndexPathByRemovingLastIndex<R = unknown>(): R;
    descendsFrom<R = boolean, P0 = unknown>(_descendsFrom: P0): R;
    checkIfComponentIndexPath<R = void, P0 = boolean>(_checkIfComponentIndexPath: P0): R;
    indexPathWithComponent<R = unknown, P0 = number>(_indexPathWithComponent: P0): R;
    handle<R = number>(): R;
    shape<R = number>(): R;
    point<R = number>(): R;
    component<R = number>(): R;
  }
  namespace classes {
    export interface NSIndexPath<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSIndexPath>(): R;
      new: <R = NSIndexPath>() => R;
      indexPathWithIndexes_length<R = unknown, P0 = number, P1 = number>(_indexPathWithIndexes: P0, _length: P1): R;
      indexPathWithIndex<R = unknown, P0 = number>(_indexPathWithIndex: P0): R;
      indexPath<R = unknown>(): R;
      initialize<R = void>(): R;
      // + NSIndexPath(NSBrowserIndexPath,NSIndexPathPrivateUtilities,MSShapeHandles):
      parentIndexPathForIndexPaths<R = unknown, P0 = unknown>(_parentIndexPathForIndexPaths: P0): R;
      indexPathForPoint_ofShape<R = unknown, P0 = number, P1 = number>(_indexPathForPoint: P0, _ofShape: P1): R;
      indexPathForComponent_point_ofShape<R = unknown, P0 = number, P1 = number, P2 = number>(_indexPathForComponent: P0, _point: P1, _ofShape: P2): R;
    }
  }
}

declare const NSIndexPath: cocoa.classes.NSIndexPath;
