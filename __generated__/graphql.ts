/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Date custom scalar type */
  Date: { input: any; output: any };
};

export type AccessToken = {
  __typename?: 'AccessToken';
  value: Scalars['String']['output'];
};

export type ActivationToken = {
  __typename?: 'ActivationToken';
  expires_at: Scalars['Date']['output'];
  token: Scalars['String']['output'];
  used: Scalars['Boolean']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  bookingTime: Array<BookingTimeItem>;
  id: Scalars['ID']['output'];
  room: Room;
  status: BookingStatus;
  title?: Maybe<Scalars['String']['output']>;
  user: User;
};

export enum BookingStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  CancelledLate = 'CANCELLED_LATE',
  Past = 'PAST',
}

export type BookingTimeItem = {
  __typename?: 'BookingTimeItem';
  inclusive?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['Date']['output'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Equipment = {
  __typename?: 'Equipment';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Faculty = {
  __typename?: 'Faculty';
  departments: Array<Department>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: UserResponse;
  addDepartmentToFaculty: Faculty;
  addEquipmentToRoom: Room;
  addUserToDepartment: Department;
  authenticate?: Maybe<AccessToken>;
  bulkCreateUsers?: Maybe<Array<Maybe<User>>>;
  cancelBooking: UserResponse;
  changePassword: UserResponse;
  createBooking: Booking;
  createDepartment: Department;
  createEquipment: Equipment;
  createFaculty: Faculty;
  createRoom: Room;
  createUser?: Maybe<User>;
  createVenue: Venue;
  deleteEquipment: Scalars['Boolean']['output'];
  deleteFaculty: Scalars['Boolean']['output'];
  deleteRoom: Scalars['Boolean']['output'];
  deleteUser: UserResponse;
  deleteVenue: Scalars['Boolean']['output'];
  removeDepartmentFromFaculty: Faculty;
  removeEquipmentFromRoom: Room;
  removeUserFromDepartment: Department;
  requestPasswordReset: UserResponse;
  resetPassword: UserResponse;
  setRoomBookableStatus: Room;
  signupRequest: UserResponse;
  updateBooking: Booking;
  updateDepartment: Department;
  updateEquipment: Equipment;
  updateFaculty: Faculty;
  updatePastBookings: UserResponse;
  updateRoom: Room;
  updateUser?: Maybe<User>;
  updateUserStatus?: Maybe<User>;
  updateVenue: Venue;
};

export type MutationActivateUserArgs = {
  activationToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};

export type MutationAddDepartmentToFacultyArgs = {
  departmentId: Scalars['ID']['input'];
  facultyId: Scalars['ID']['input'];
};

export type MutationAddEquipmentToRoomArgs = {
  equipmentIds: Array<Scalars['ID']['input']>;
  roomId: Scalars['ID']['input'];
};

export type MutationAddUserToDepartmentArgs = {
  departmentId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type MutationAuthenticateArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationBulkCreateUsersArgs = {
  users: Array<UserInput>;
};

export type MutationCancelBookingArgs = {
  bookingId: Scalars['ID']['input'];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type MutationCreateBookingArgs = {
  bookingTime: Array<Scalars['Date']['input']>;
  roomId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateDepartmentArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateEquipmentArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateFacultyArgs = {
  name: Scalars['String']['input'];
};

export type MutationCreateRoomArgs = {
  code: Scalars['String']['input'];
  departmentId: Scalars['ID']['input'];
  equipmentIds: Array<Scalars['ID']['input']>;
  isBookable: Scalars['Boolean']['input'];
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
  type: RoomType;
  venueId: Scalars['ID']['input'];
};

export type MutationCreateUserArgs = {
  userInput: UserInput;
};

export type MutationCreateVenueArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MutationDeleteEquipmentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteFacultyArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteRoomArgs = {
  roomId: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  userId: Scalars['ID']['input'];
};

export type MutationDeleteVenueArgs = {
  id: Scalars['ID']['input'];
};

export type MutationRemoveDepartmentFromFacultyArgs = {
  departmentId: Scalars['ID']['input'];
  facultyId: Scalars['ID']['input'];
};

export type MutationRemoveEquipmentFromRoomArgs = {
  equipmentIds: Array<Scalars['ID']['input']>;
  roomId: Scalars['ID']['input'];
};

export type MutationRemoveUserFromDepartmentArgs = {
  departmentId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type MutationSetRoomBookableStatusArgs = {
  isBookable: Scalars['Boolean']['input'];
  roomId: Scalars['ID']['input'];
};

export type MutationSignupRequestArgs = {
  userInput: UserInput;
};

export type MutationUpdateBookingArgs = {
  bookingId: Scalars['ID']['input'];
  bookingTime: Array<Scalars['Date']['input']>;
  roomId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateDepartmentArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateEquipmentArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateFacultyArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type MutationUpdateRoomArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  departmentId?: InputMaybe<Scalars['ID']['input']>;
  equipmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isBookable?: InputMaybe<Scalars['Boolean']['input']>;
  pictureUrl?: InputMaybe<Scalars['String']['input']>;
  roomId: Scalars['ID']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<RoomType>;
};

export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  familyName?: InputMaybe<Scalars['String']['input']>;
  givenName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUpdateUserStatusArgs = {
  status: UserStatus;
  userId: Scalars['ID']['input'];
};

export type MutationUpdateVenueArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allDepartments: Array<Department>;
  allEquipment: Array<Equipment>;
  allFaculties: Array<Faculty>;
  allUsers: Array<User>;
  allVenues: Array<Venue>;
  bookings: Array<Booking>;
  checkActivationToken: Scalars['Boolean']['output'];
  currentUser?: Maybe<User>;
  findDepartment?: Maybe<Department>;
  findDepartmentByName: Array<Department>;
  findDepartmentsByFaculty: Array<Department>;
  findEquipment?: Maybe<Equipment>;
  findEquipmentByName: Array<Equipment>;
  findFaculty?: Maybe<Faculty>;
  findFacultyByName: Array<Faculty>;
  findRoom?: Maybe<Room>;
  findUser?: Maybe<User>;
  findUserByName?: Maybe<User>;
  findUsersByDepartment: Array<User>;
  findUsersByRole: Array<User>;
  findVenue?: Maybe<Venue>;
  findVenueByName: Array<Venue>;
  findVenuesByDepartment: Array<Venue>;
  rooms: RoomConnection;
};

export type QueryAllEquipmentArgs = {
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
};

export type QueryAllVenuesArgs = {
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
};

export type QueryBookingsArgs = {
  endDate?: InputMaybe<Scalars['Date']['input']>;
  roomId?: InputMaybe<Scalars['ID']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<BookingStatus>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCheckActivationTokenArgs = {
  activationToken: Scalars['String']['input'];
};

export type QueryFindDepartmentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindDepartmentByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryFindDepartmentsByFacultyArgs = {
  facultyId: Scalars['ID']['input'];
};

export type QueryFindEquipmentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindEquipmentByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryFindFacultyArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindFacultyByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryFindRoomArgs = {
  roomId: Scalars['ID']['input'];
};

export type QueryFindUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindUserByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryFindUsersByDepartmentArgs = {
  departmentId: Scalars['ID']['input'];
};

export type QueryFindUsersByRoleArgs = {
  role: UserRole;
};

export type QueryFindVenueArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFindVenueByNameArgs = {
  name: Scalars['String']['input'];
};

export type QueryFindVenuesByDepartmentArgs = {
  departmentId: Scalars['ID']['input'];
};

export type QueryRoomsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  endsAt?: InputMaybe<Scalars['Date']['input']>;
  equipmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isBookable?: InputMaybe<Scalars['Boolean']['input']>;
  roomTypes?: InputMaybe<Array<RoomType>>;
  searchKeyword?: InputMaybe<Scalars['String']['input']>;
  startsAt?: InputMaybe<Scalars['Date']['input']>;
  venueIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Room = {
  __typename?: 'Room';
  code: Scalars['String']['output'];
  department?: Maybe<Department>;
  description: Scalars['String']['output'];
  equipment: Array<Equipment>;
  id: Scalars['ID']['output'];
  isBookable: Scalars['Boolean']['output'];
  isFree?: Maybe<Scalars['Boolean']['output']>;
  pictureUrl?: Maybe<Scalars['String']['output']>;
  size: Scalars['Int']['output'];
  type: RoomType;
  venue: Venue;
};

export type RoomConnection = {
  __typename?: 'RoomConnection';
  edges: Array<RoomEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RoomEdge = {
  __typename?: 'RoomEdge';
  cursor: Scalars['String']['output'];
  node: Room;
};

export enum RoomType {
  AdministrativeSpace = 'ADMINISTRATIVE_SPACE',
  Classroom = 'CLASSROOM',
  ConcertHall = 'CONCERT_HALL',
  Library = 'LIBRARY',
  MeetingRoom = 'MEETING_ROOM',
  PracticeRoom = 'PRACTICE_ROOM',
  Studio = 'STUDIO',
  Theater = 'THEATER',
}

export enum TokenType {
  Activation = 'ACTIVATION',
  PasswordReset = 'PASSWORD_RESET',
}

export type User = {
  __typename?: 'User';
  department: Department;
  email: Scalars['String']['output'];
  familyName: Scalars['String']['output'];
  givenName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  role: UserRole;
  status: UserStatus;
  userNumber: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type UserInput = {
  departmentId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  familyName: Scalars['String']['input'];
  givenName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  status: UserStatus;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  id?: Maybe<Scalars['ID']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Manager = 'MANAGER',
  Student = 'STUDENT',
  Teacher = 'TEACHER',
}

export enum UserStatus {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Pending = 'PENDING',
}

export type Venue = {
  __typename?: 'Venue';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type SignupRequestMutationVariables = Exact<{
  userInput: UserInput;
}>;

export type SignupRequestMutation = {
  __typename?: 'Mutation';
  signupRequest: { __typename?: 'UserResponse'; message: string };
};

export type ActivateUserMutationVariables = Exact<{
  activationToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;

export type ActivateUserMutation = {
  __typename?: 'Mutation';
  activateUser: { __typename?: 'UserResponse'; message: string };
};

export type CheckActivationTokenQueryVariables = Exact<{
  activationToken: Scalars['String']['input'];
}>;

export type CheckActivationTokenQuery = {
  __typename?: 'Query';
  checkActivationToken: boolean;
};

export const SignupRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'SignupRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UserInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signupRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'userInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'userInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SignupRequestMutation,
  SignupRequestMutationVariables
>;
export const ActivateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'ActivateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'activationToken' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'newPassword' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'activateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'activationToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'activationToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'newPassword' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'newPassword' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'message' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ActivateUserMutation,
  ActivateUserMutationVariables
>;
export const CheckActivationTokenDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CheckActivationToken' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'activationToken' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'checkActivationToken' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'activationToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'activationToken' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CheckActivationTokenQuery,
  CheckActivationTokenQueryVariables
>;
