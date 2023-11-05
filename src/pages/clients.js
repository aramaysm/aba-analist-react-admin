import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();

const data = [
  {
      "id": 2,
      "name": " BRADLEIGH ALBERTO ",
      "recipientId": "9486076979",
      "patientAccount": "EP-M0136",
      "releaseInformationId": 1,
      "referringProvider": "056888100",
      "authorizationNumber": "5122193615",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 30,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": [
          {
              "id": 21999,
              "periodId": 128,
              "contractorId": 72,
              "clientId": 2,
              "createdDate": "2023-10-27T13:58:13.159",
              "billedDate": "2023-10-27T15:00:22.717023",
              "biller": "82881b31-6279-479d-b497-ce1e7ec2193e",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21282,
              "periodId": 127,
              "contractorId": 72,
              "clientId": 2,
              "createdDate": "2023-10-09T14:56:05.25",
              "billedDate": "2023-10-19T20:04:13.200582",
              "biller": "82881b31-6279-479d-b497-ce1e7ec2193e",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20690,
              "periodId": 126,
              "contractorId": 72,
              "clientId": 2,
              "createdDate": "2023-09-25T19:04:05.031",
              "billedDate": "2023-09-27T13:13:18.321023",
              "biller": "82881b31-6279-479d-b497-ce1e7ec2193e",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20915,
              "periodId": 126,
              "contractorId": 72,
              "clientId": 2,
              "createdDate": "2023-10-02T15:40:51.765",
              "billedDate": "2023-10-02T20:23:29.295231",
              "biller": "82881b31-6279-479d-b497-ce1e7ec2193e",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21557,
              "periodId": 127,
              "contractorId": 72,
              "clientId": 2,
              "createdDate": "2023-10-16T16:49:11.489",
              "billedDate": "2023-10-19T20:00:40.153115",
              "biller": "82881b31-6279-479d-b497-ce1e7ec2193e",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          }
      ]
  },
  {
      "id": 3,
      "name": "ABEL VARELA",
      "recipientId": "9528643213",
      "patientAccount": "EP-M0002",
      "releaseInformationId": 1,
      "referringProvider": "252407400",
      "authorizationNumber": "5222210333",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 30,
      "weeklyApprovedAnalyst": 3,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": [
          {
              "id": 21794,
              "periodId": 127,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-10-19T15:09:08.665",
              "billedDate": "2023-10-19T18:43:40.676842",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21982,
              "periodId": 128,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-26T16:46:40.914",
              "billedDate": "2023-10-27T01:12:13.855906",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21983,
              "periodId": 128,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-10-26T16:49:18.637",
              "billedDate": "2023-10-27T01:13:08.311092",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20967,
              "periodId": 126,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-10-02T17:29:38.316",
              "billedDate": "2023-10-03T13:19:05.359938",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20966,
              "periodId": 126,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-02T17:27:36.675",
              "billedDate": "2023-10-03T13:16:25.771051",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21178,
              "periodId": 126,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-05T13:33:04.571",
              "billedDate": "2023-10-05T16:14:14.455897",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21271,
              "periodId": 126,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-10-06T14:29:51.924",
              "billedDate": "2023-10-06T15:46:33.236315",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21345,
              "periodId": 127,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-11T15:00:16.301",
              "billedDate": "2023-10-11T15:22:06.909424",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21417,
              "periodId": 127,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-10-12T14:38:30.894",
              "billedDate": "2023-10-12T15:19:34.204509",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21682,
              "periodId": 127,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-18T14:57:09.481",
              "billedDate": "2023-10-18T16:48:52.271264",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22062,
              "periodId": 128,
              "contractorId": 350,
              "clientId": 3,
              "createdDate": "2023-10-31T14:38:41.94",
              "billedDate": "2023-11-01T16:50:34.221906",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22255,
              "periodId": 128,
              "contractorId": 81,
              "clientId": 3,
              "createdDate": "2023-11-02T17:32:26.937",
              "billedDate": "2023-11-02T18:18:23.103098",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          }
      ]
  },
  {
      "id": 18,
      "name": "ALAYA RAMIREZ",
      "recipientId": "9613014489",
      "patientAccount": "EP-M0133",
      "releaseInformationId": 1,
      "referringProvider": "056888100",
      "authorizationNumber": "5222200479",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 31,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": []
  },
  {
      "id": 19,
      "name": "ALIA RAMIREZ",
      "recipientId": "9613014471",
      "patientAccount": "EP-M0139",
      "releaseInformationId": 1,
      "referringProvider": "056888100",
      "authorizationNumber": "5222200486",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 33,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": []
  },
  {
      "id": 21,
      "name": "ALLAN DIAZ",
      "recipientId": " 9531313733",
      "patientAccount": "EP-M0027",
      "releaseInformationId": 1,
      "referringProvider": "019240400",
      "authorizationNumber": "5022197417",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 28,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": []
  },
  {
      "id": 23,
      "name": "ANDREW DELGADO",
      "recipientId": " 9539465141",
      "patientAccount": "EP-M0129",
      "releaseInformationId": 1,
      "referringProvider": "056888100",
      "authorizationNumber": "5122200486",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 28,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": []
  },
  {
      "id": 25,
      "name": "AIDAN TORRES",
      "recipientId": "9260575141",
      "patientAccount": "EP-M0086",
      "releaseInformationId": 1,
      "referringProvider": "070259500",
      "authorizationNumber": "5122203352",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 20,
      "weeklyApprovedAnalyst": 6,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": [
          {
              "id": 21963,
              "periodId": 128,
              "contractorId": 187,
              "clientId": 25,
              "createdDate": "2023-10-26T15:22:11.165",
              "billedDate": "2023-10-26T16:49:30.372867",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21964,
              "periodId": 128,
              "contractorId": 187,
              "clientId": 25,
              "createdDate": "2023-10-26T15:24:46.82",
              "billedDate": "2023-10-26T16:49:30.372867",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21965,
              "periodId": 128,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-26T15:25:50.019",
              "billedDate": "2023-10-26T16:50:52.227455",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20964,
              "periodId": 126,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-02T17:24:30.179",
              "billedDate": "2023-10-03T14:35:39.866566",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20965,
              "periodId": 126,
              "contractorId": 187,
              "clientId": 25,
              "createdDate": "2023-10-02T17:26:18.86",
              "billedDate": "2023-10-03T14:34:40.631578",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21246,
              "periodId": 126,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-05T16:56:12.082",
              "billedDate": "2023-10-05T17:10:19.49382",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21276,
              "periodId": 126,
              "contractorId": 187,
              "clientId": 25,
              "createdDate": "2023-10-06T14:50:43.53",
              "billedDate": "2023-10-06T15:47:57.729912",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21410,
              "periodId": 127,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-12T14:18:31.062",
              "billedDate": "2023-10-12T15:20:27.572189",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21443,
              "periodId": 127,
              "contractorId": 187,
              "clientId": 25,
              "createdDate": "2023-10-12T17:41:52.027",
              "billedDate": "2023-10-12T18:09:49.798317",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21644,
              "periodId": 127,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-17T15:29:46.018",
              "billedDate": "2023-10-17T18:55:25.236819",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22066,
              "periodId": 128,
              "contractorId": 96,
              "clientId": 25,
              "createdDate": "2023-10-31T14:51:58.905",
              "billedDate": "2023-11-01T16:51:20.888715",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          }
      ]
  },
  {
      "id": 27,
      "name": "ANGELO GUTIERREZ",
      "recipientId": "9560684477",
      "patientAccount": "EP-M0005",
      "releaseInformationId": 1,
      "referringProvider": "019240400",
      "authorizationNumber": "5122214349",
      "sequence": 1,
      "diagnosisId": 27,
      "enabled": true,
      "weeklyApprovedRbt": 30,
      "weeklyApprovedAnalyst": 3,
      "agreements": [],
      "diagnosis": {
          "id": 27,
          "name": "F84.0",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": [
          {
              "id": 21909,
              "periodId": 128,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-10-26T13:18:21.087",
              "billedDate": "2023-10-26T14:22:36.250656",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21908,
              "periodId": 128,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-10-26T13:17:30.201",
              "billedDate": "2023-10-26T14:23:40.548721",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20825,
              "periodId": 126,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-09-28T14:43:47.253",
              "billedDate": "2023-09-28T18:27:12.505204",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20824,
              "periodId": 126,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-09-28T14:42:32.143",
              "billedDate": "2023-09-28T18:28:39.50955",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21086,
              "periodId": 126,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-10-03T17:49:39.778",
              "billedDate": "2023-10-04T00:30:19.039644",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21088,
              "periodId": 126,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-10-03T17:50:58.782",
              "billedDate": "2023-10-04T00:28:58.852116",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21313,
              "periodId": 127,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-10-11T14:03:54.082",
              "billedDate": "2023-10-11T15:26:28.327267",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21544,
              "periodId": 127,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-10-16T15:25:46.586",
              "billedDate": "2023-10-17T14:18:53.086829",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21603,
              "periodId": 127,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-10-17T12:13:08.187",
              "billedDate": "2023-10-17T14:18:53.086829",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21543,
              "periodId": 127,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-10-16T15:24:26.699",
              "billedDate": "2023-10-17T14:20:12.232699",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22070,
              "periodId": 128,
              "contractorId": 38,
              "clientId": 27,
              "createdDate": "2023-10-31T15:07:45.83",
              "billedDate": "2023-11-01T17:03:01.151102",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22153,
              "periodId": 128,
              "contractorId": 30,
              "clientId": 27,
              "createdDate": "2023-11-01T16:37:03.9",
              "billedDate": "2023-11-01T17:01:40.334605",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          }
      ]
  },
  {
      "id": 28,
      "name": "ANSEL MARTINEZ",
      "recipientId": "9539201152",
      "patientAccount": "EP-M0088",
      "releaseInformationId": 1,
      "referringProvider": "014784900",
      "authorizationNumber": "5122213829",
      "sequence": 1,
      "diagnosisId": 1,
      "enabled": true,
      "weeklyApprovedRbt": 24,
      "weeklyApprovedAnalyst": 5,
      "agreements": [],
      "diagnosis": {
          "id": 1,
          "name": "F90.1",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": [
          {
              "id": 21926,
              "periodId": 128,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-10-26T13:56:54.101",
              "billedDate": "2023-10-26T14:25:42.682595",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21927,
              "periodId": 128,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-10-26T14:07:45.04",
              "billedDate": "2023-10-26T14:47:52.182875",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21928,
              "periodId": 128,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-10-26T14:09:02.584",
              "billedDate": "2023-10-26T14:47:19.207088",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20888,
              "periodId": 126,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-09-29T17:38:06.063",
              "billedDate": "2023-09-29T17:56:04.497246",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20887,
              "periodId": 126,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-09-29T17:37:14.326",
              "billedDate": "2023-09-29T17:56:39.433363",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 20886,
              "periodId": 126,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-09-29T17:36:15.095",
              "billedDate": "2023-09-29T17:57:50.416248",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21105,
              "periodId": 126,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-10-03T18:27:49.678",
              "billedDate": "2023-10-04T00:38:07.363097",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21103,
              "periodId": 126,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-10-03T18:25:48.303",
              "billedDate": "2023-10-04T00:40:29.829251",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21106,
              "periodId": 126,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-10-03T18:29:07.781",
              "billedDate": "2023-10-04T00:32:20.1648",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21104,
              "periodId": 126,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-10-03T18:26:42.005",
              "billedDate": "2023-10-04T00:38:48.76915",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21321,
              "periodId": 127,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-10-11T14:18:21.544",
              "billedDate": "2023-10-11T16:00:40.747437",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21322,
              "periodId": 127,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-10-11T14:20:12.793",
              "billedDate": "2023-10-11T16:01:40.169738",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21391,
              "periodId": 127,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-10-12T13:36:30.555",
              "billedDate": "2023-10-12T15:26:19.323404",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21565,
              "periodId": 127,
              "contractorId": 59,
              "clientId": 28,
              "createdDate": "2023-10-16T17:02:44.576",
              "billedDate": "2023-10-17T14:23:07.903988",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21566,
              "periodId": 127,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-10-16T17:03:36.39",
              "billedDate": "2023-10-17T14:24:08.997113",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 21564,
              "periodId": 127,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-10-16T17:01:43.186",
              "billedDate": "2023-10-17T14:25:04.851274",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22081,
              "periodId": 128,
              "contractorId": 23,
              "clientId": 28,
              "createdDate": "2023-10-31T15:51:06.597",
              "billedDate": "2023-11-01T17:03:58.939507",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          },
          {
              "id": 22236,
              "periodId": 128,
              "contractorId": 245,
              "clientId": 28,
              "createdDate": "2023-11-02T15:13:48.349",
              "billedDate": "2023-11-02T15:36:43.965111",
              "biller": "ed26d83b-6304-4f5f-9d8c-286b323724fe",
              "pending": null,
              "client": null,
              "contractor": null,
              "period": null,
              "unitDetails": []
          }
      ]
  },
  {
      "id": 29,
      "name": "ARYA INZA",
      "recipientId": "9555225567",
      "patientAccount": "EP-M0094",
      "releaseInformationId": 1,
      "referringProvider": "373368800",
      "authorizationNumber": "5122200459",
      "sequence": 1,
      "diagnosisId": 23,
      "enabled": true,
      "weeklyApprovedRbt": 34,
      "weeklyApprovedAnalyst": 4,
      "agreements": [],
      "diagnosis": {
          "id": 23,
          "name": "F90.2",
          "description": null,
          "clients": []
      },
      "patientAccounts": [],
      "releaseInformation": {
          "id": 1,
          "name": "INFORMED CONSENT TO RELEASE BY FEDERAL STATUTES",
          "clients": []
      },
      "serviceLogs": []
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Clients | Aba Analyst
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Clients
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
