import { type ViewProps } from 'react-native';
import { CameraType, type FlashMode, type FocusMode, type ZoomMode, type TorchMode, type ResizeMode, type CodeFormat } from './types';
import { Orientation } from './index';
export type OnReadCodeData = {
    nativeEvent: {
        codeStringValue: string;
        codeFormat: CodeFormat;
    };
};
export type OnOrientationChangeData = {
    nativeEvent: {
        orientation: typeof Orientation[keyof typeof Orientation];
    };
};
export type OnZoom = {
    nativeEvent: {
        zoom: number;
    };
};
export type FaceData = {
    id: number;
    yaw: number;
    pitch: number;
    roll: number;
    boundsX: number;
    boundsY: number;
    boundsWidth: number;
    boundsHeight: number;
};
export type OnFaceDetectedData = {
    nativeEvent: {
        faces: FaceData[];
    };
};
export type FaceDetectionInstallState = 'pending' | 'downloading' | 'installing' | 'ready' | 'failed' | 'unavailable';
export type OnFaceDetectionInstallStatusData = {
    nativeEvent: {
        state: FaceDetectionInstallState;
    };
};
export interface CameraProps extends ViewProps {
    flashMode?: FlashMode;
    focusMode?: FocusMode;
    zoomMode?: ZoomMode;
    zoom?: number;
    maxZoom?: number;
    torchMode?: TorchMode;
    cameraType?: CameraType;
    onOrientationChange?: (event: OnOrientationChangeData) => void;
    onZoom?: (event: OnZoom) => void;
    onError?: (event: {
        nativeEvent: {
            errorMessage: string;
        };
    }) => void;
    scanBarcode?: boolean;
    showFrame?: boolean;
    laserColor?: number | string;
    frameColor?: number | string;
    barcodeFrameSize?: {
        width: number;
        height: number;
    };
    onReadCode?: (event: OnReadCodeData) => void;
    ratioOverlay?: string;
    ratioOverlayColor?: number | string;
    resetFocusTimeout?: number;
    resetFocusWhenMotionDetected?: boolean;
    resizeMode?: ResizeMode;
    scanThrottleDelay?: number;
    maxPhotoQualityPrioritization?: 'balanced' | 'quality' | 'speed';
    iOsDeferredStart?: boolean;
    shutterPhotoSound?: boolean;
    onCaptureButtonPressIn?: ({ nativeEvent: {} }: {
        nativeEvent: {};
    }) => void;
    onCaptureButtonPressOut?: ({ nativeEvent: {} }: {
        nativeEvent: {};
    }) => void;
    allowedBarcodeTypes?: CodeFormat[];
    faceDetectionEnabled?: boolean;
    faceDetectionThrottleMs?: number;
    onFaceDetected?: (event: OnFaceDetectedData) => void;
    onFaceDetectionInstallStatus?: (event: OnFaceDetectionInstallStatusData) => void;
}
