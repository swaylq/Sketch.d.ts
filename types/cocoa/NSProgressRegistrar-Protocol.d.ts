/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressRegistrarProtocol<T0 = void, T1 = void, T2 = void> {
    removeSubscriberForID<R = void, P0 = NSString>(_removeSubscriberForID: P0): R;
    addSubscriber_forID_appBundleID_fileURL_completionHandler<R = void, P0 = NSProgressSubscriber, P1 = NSString, P2 = NSString, P3 = NSURL, P4 = CDUnknownBlockType>(_addSubscriber: P0, _forID: P1, _appBundleID: P2, _fileURL: P3, _completionHandler: P4): R;
    addSubscriber_forID_appBundleID_category_completionHandler<R = void, P0 = NSProgressSubscriber, P1 = NSString, P2 = NSString, P3 = NSString, P4 = CDUnknownBlockType>(_addSubscriber: P0, _forID: P1, _appBundleID: P2, _category: P3, _completionHandler: P4): R;
    removePublisherForID<R = void, P0 = NSString>(_removePublisherForID: P0): R;
    observePublisherUserInfoForID_value_forKey<R = void, P0 = NSString, P1 = unknown, P2 = NSString>(_observePublisherUserInfoForID: P0, _value: P1, _forKey: P2): R;
    observePublisherForID_values_forKeys<R = void, P0 = NSString, P1 = NSArray, P2 = NSArray>(_observePublisherForID: P0, _values: P1, _forKeys: P2): R;
    addPublisher_forID_acknowledgementAppBundleIDs_category_fileURL_initialValues_completionHandler<R = void, P0 = NSProgressPublisher, P1 = NSString, P2 = NSSet, P3 = NSString, P4 = NSURL, P5 = NSProgressValues, P6 = CDUnknownBlockType>(_addPublisher: P0, _forID: P1, _acknowledgementAppBundleIDs: P2, _category: P3, _fileURL: P4, _initialValues: P5, _completionHandler: P6): R;
  }
  namespace NSProgressRegistrarProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
