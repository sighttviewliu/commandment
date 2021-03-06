import {
    CERTIFICATES_SUCCESS,
    CertificatesActionResponse
} from "../../actions/device/certificates";
import {JSONAPIObject, isJSONAPIErrorResponsePayload} from "../../json-api";
import {InstalledCertificate} from "../../models";
import {OtherAction} from "../../actions/constants";

export interface InstalledCertificatesState {
    items?: Array<JSONAPIObject<InstalledCertificate>>;
    recordCount: number;
}

const initialState: InstalledCertificatesState = {
    items: [],
    recordCount: 0
};

type InstalledCertificatesAction = CertificatesActionResponse | OtherAction;

export function installed_certificates(state: InstalledCertificatesState = initialState, action: InstalledCertificatesAction): InstalledCertificatesState {
    switch (action.type) {
        case CERTIFICATES_SUCCESS:
            if (isJSONAPIErrorResponsePayload(action.payload)) {
                return state;
            } else {
                return {
                    ...state,
                    items: action.payload.data,
                    recordCount: action.payload.meta.count
                };
            }
        default:
            return state;
    }
}