/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingService<T0 = void, T1 = void, T2 = void> extends NSObject {
    _touchBarImage<R = unknown>(): R;
    _blocksActionWhenModal<R = boolean, P0 = string>(__blocksActionWhenModal: P0): R;
    _preProcessingJavaScriptURL<R = unknown>(): R;
    setParameterValue_forKey<R = void, P0 = unknown, P1 = unknown>(_setParameterValue: P0, _forKey: P1): R;
    setParameters<R = void, P0 = unknown>(_setParameters: P0): R;
    parameters<R = unknown>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    isEnabled<R = boolean>(): R;
    setSubtitle<R = void, P0 = unknown>(_setSubtitle: P0): R;
    subtitle<R = unknown>(): R;
    name<R = unknown>(): R;
    shkSharingService<R = unknown>(): R;
    setShkSharingService<R = void, P0 = unknown>(_setShkSharingService: P0): R;
    type<R = number>(): R;
    dismissWithCompletion<R = void, P0 = CDUnknownBlockType>(_dismissWithCompletion: P0): R;
    performWithItems<R = void, P0 = unknown>(_performWithItems: P0): R;
    canPerformWithItems<R = boolean, P0 = unknown>(_canPerformWithItems: P0): R;
    dealloc<R = void>(): R;
    initWithTitle_image_alternateImage_handler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_initWithTitle: P0, _image: P1, _alternateImage: P2, _handler: P3): R;
    _commonInit<R = void>(): R;
    _setSecondaryCheckboxState<R = void, P0 = number>(__setSecondaryCheckboxState: P0): R;
    _setSecondaryCheckboxTitle<R = void, P0 = unknown>(__setSecondaryCheckboxTitle: P0): R;
    _setPrimaryCheckboxState<R = void, P0 = number>(__setPrimaryCheckboxState: P0): R;
    _setPrimaryCheckboxTitle<R = void, P0 = unknown>(__setPrimaryCheckboxTitle: P0): R;
    _setParticipantDetails<R = void, P0 = unknown>(__setParticipantDetails: P0): R;
    _setApplicationIcon<R = void, P0 = unknown>(__setApplicationIcon: P0): R;
    _setLocalizedPasswordActionTitle<R = void, P0 = unknown>(__setLocalizedPasswordActionTitle: P0): R;
    _setIsAddPeopleService<R = void, P0 = boolean>(__setIsAddPeopleService: P0): R;
    attachmentFileURLs<R = NSArray>(): R;
    accountName<R = NSString>(): R;
    permanentLink<R = NSURL>(): R;
    messageBody<R = NSString>(): R;
    subject<R = NSString>(): R;
    setSubject<R = void, P0 = NSString>(_v: P0): R;
    recipients<R = NSArray>(): R;
    setRecipients<R = void, P0 = NSArray>(_v: P0): R;
    menuItemTitle<R = NSString>(): R;
    setMenuItemTitle<R = void, P0 = NSString>(_v: P0): R;
    alternateImage<R = NSImage>(): R;
    image<R = NSImage>(): R;
    title<R = NSString>(): R;
    delegate<R = NSSharingServiceDelegate>(): R;
    setDelegate<R = void, P0 = NSSharingServiceDelegate>(_v: P0): R;
  }
  namespace NSSharingService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSharingService>(): R;
      new: <R = NSSharingService>() => R;
      _addRecentEmailServiceToDefaultsWithSubject_recipients<R = void, P0 = unknown, P1 = unknown>(__addRecentEmailServiceToDefaultsWithSubject: P0, _recipients: P1): R;
      sharingServicesForAttributedString_range_mask<R = unknown, P0 = unknown, P1 = _NSRange, P2 = number>(_sharingServicesForAttributedString: P0, _range: P1, _mask: P2): R;
      sharingServicesForItems<R = unknown, P0 = unknown>(_sharingServicesForItems: P0): R;
      sharingServicesForItems_mask<R = unknown, P0 = unknown, P1 = number>(_sharingServicesForItems: P0, _mask: P1): R;
      getSharingServicesForItems_mask_completion<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_getSharingServicesForItems: P0, _mask: P1, _completion: P2): R;
      _filteredSharingServices_forCloudSharingWithItems<R = unknown, P0 = unknown, P1 = unknown>(__filteredSharingServices: P0, _forCloudSharingWithItems: P1): R;
      _urlFromItem<R = unknown, P0 = unknown>(__urlFromItem: P0): R;
      sharingServiceNamed<R = unknown, P0 = unknown>(_sharingServiceNamed: P0): R;
      _sharingServiceNamed_allowInactive<R = unknown, P0 = unknown, P1 = boolean>(__sharingServiceNamed: P0, _allowInactive: P1): R;
      _usesItemProvider<R = boolean>(): R;
      _SHKSharingServicePickerClass<R = unknown>(): R;
      _SHKSharingServiceClass<R = unknown>(): R;
      _loadShareKit<R = void>(): R;
      _cloudSharingErrorClasses<R = unknown>(): R;
    }
  }
}

declare const NSSharingService: cocoa.NSSharingService.CLASS;
