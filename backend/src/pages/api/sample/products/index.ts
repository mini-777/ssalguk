import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";


export const productSampleItems = [
  {
    id: 1,
    code: "1",
    name: "성민",
    phnoe_number: "010-1234-5678",
    status: "gktjdals",
    createdAt: dayjs("2023-02-02T10:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T10:00:00+09:00"),
  },
  {
    id: 2,
    code: "2",
    name: "고은샘",
    phnoe_number: "010-9876-5432",
    status: "dmsamy",
    createdAt: dayjs("2023-02-02T11:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T11:00:00+09:00"),
  },
  {
    id: 3,
    code: "3",
    name: "남지연",
    phnoe_number: "010-2222-3333",
    status: "namjiji",
    createdAt: dayjs("2023-02-02T12:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T12:00:00+09:00"),
  },
  {
    id: 4,
    code: "4",
    name: "남소은",
    phnoe_number: "010-9999-8888",
    status: "skathrma",
    createdAt: dayjs("2023-02-02T13:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T13:00:00+09:00"),
  },
  {
    id: 5,
    code: "5",
    name: "강아지",
    phnoe_number: "010-2344-5678",
    status: "dogdoggg",
    createdAt: dayjs("2023-02-02T14:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T14:00:00+09:00"),
  },
  {
    id: 6,
    code: "6",
    name: "고양희",
    phnoe_number: "010-2333-4000",
    status: "coolcatt",
    createdAt: dayjs("2023-02-02T15:00:00+09:00"),
    updatedAt: dayjs("2023-02-02T15:00:00+09:00"),
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = req.query.page ? Number(req.query.page) : 1;

  res.status(200).json({
    code: 0,
    message: "OK",
    data: {
      items: page === 1 ? productSampleItems.slice(0, 5) : [productSampleItems[5]],
      page: {
        currentPage: page,
        pageSize: 5,
        totalPage: 1,
        totalCount: productSampleItems.length,
      },
    },
  });
}
