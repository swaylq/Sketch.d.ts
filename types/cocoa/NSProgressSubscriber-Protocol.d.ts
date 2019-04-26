/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressSubscriberProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    removePublisherForID<R = void, P0 = NSString>(_removePublisherForID: P0): R;
    observePublisherUserInfoForID_value_forKey<R = void, P0 = NSString, P1 = unknown, P2 = NSString>(_observePublisherUserInfoForID: P0, _value: P1, _forKey: P2): R;
    observePublisherForID_values_forKeys<R = void, P0 = NSString, P1 = NSArray, P2 = NSArray>(_observePublisherForID: P0, _values: P1, _forKeys: P2): R;
    addPublisher_forID_withValues_isOld<R = void, P0 = NSProgressPublisher, P1 = NSString, P2 = NSProgressValues, P3 = boolean>(_addPublisher: P0, _forID: P1, _withValues: P2, _isOld: P3): R;
  }
  namespace NSProgressSubscriberProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
