import { StatusCodes } from "http-status-codes";

export interface Status {
    status: number;
    isSuccess: boolean;
    code: number | string;
    message: string;
    detail?: any;
}

export const status: { [key: string]: Status } = {
    //success
    SUCCESS: { status: StatusCodes.OK, isSuccess: true, code: 2000, message: "success!" },

    //error
    //common err
    INTERNAL_SERVER_ERROR: {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        isSuccess: false,
        code: "COMMON000",
        message: "서버 에러, 관리자에게 문의 바랍니다.",
    },
    NOT_FOUND: {
        status: StatusCodes.NOT_FOUND,
        isSuccess: false,
        code: "COMMON001",
        message: "요청한 페이지를 찾을 수 없습니다. 관리자에게 문의 바랍니다.",
    },
    MISSING_REQUIRED_FIELDS: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON002",
        message: "요청에 필요한 정보가 누락되었습니다.",
    },
    REQUEST_VALIDATION_ERROR: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON003",
        message: "요청이 유효하지 않습니다.",
    },
};
