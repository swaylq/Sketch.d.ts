/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryUpdatingInfo<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    isHigherVersionThan<R = boolean, P0 = unknown>(_isHigherVersionThan: P0): R;
    isEqualToAssetLibraryUpdatingInfo<R = boolean, P0 = unknown>(_isEqualToAssetLibraryUpdatingInfo: P0): R;
    initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number>(_initWithDownloadURL: P0, _libraryName: P1, _imageURL: P2, _newVersionNumber: P3, _shareLink: P4, _downloadSize: P5): R;
    shareLink<R = NSURL>(): R;
    downloadTaskIdentifier<R = NSString>(): R;
    setDownloadTaskIdentifier<R = void, P0 = NSString>(_v: P0): R;
    folderMonitor<R = MSFolderMonitor>(): R;
    setFolderMonitor<R = void, P0 = MSFolderMonitor>(_v: P0): R;
    imageURL<R = NSURL>(): R;
    libraryName<R = NSString>(): R;
    downloadSize<R = number>(): R;
    versionNumberForUpdate<R = NSString>(): R;
    downloadURL<R = NSURL>(): R;
  }
  namespace MSAssetLibraryUpdatingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = MSAssetLibraryUpdatingInfo>(): R;
      new: <R = MSAssetLibraryUpdatingInfo>() => R;
    }
  }
}

declare const MSAssetLibraryUpdatingInfo: cocoa.MSAssetLibraryUpdatingInfo.CLASS;
