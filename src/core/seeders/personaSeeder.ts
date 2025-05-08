import * as organisationSeeds from '@app-lcs2/core/seeds/organisation';
import * as organisationRoleSeeds from '@app-lcs2/core/seeds/organisationRole';
import * as organisationTypeSeeds from '@app-lcs2/core/seeds/organisationType';
import * as organisationUserSeeds from '@app-lcs2/core/seeds/organisationUser';
import * as roleSeeds from '@app-lcs2/core/seeds/role';
import * as userSeeds from '@app-lcs2/core/seeds/user';
import * as userSessionSeeds from '@app-lcs2/core/seeds/userSession';
import * as userTypeSeeds from '@app-lcs2/core/seeds/userType';

import { seederPerModel } from './seederPerModel';

export const personaSeeder = async (
  OrganisationModel,
  OrganisationRoleModel,
  OrganisationTypeModel,
  OrganisationUserModel,
  RoleModel,
  UserModel,
  UserSessionModel,
  UserTypeModel,
) => {
  await seederPerModel({
    model: OrganisationModel,
    modelName: 'organisationModel',
    seeds: organisationSeeds,
  });

  await seederPerModel({
    model: OrganisationRoleModel,
    modelName: 'organisationRoleModel',
    seeds: organisationRoleSeeds,
  });

  await seederPerModel({
    model: OrganisationTypeModel,
    modelName: 'organisationTypeModel',
    seeds: organisationTypeSeeds,
  });

  await seederPerModel({
    model: OrganisationUserModel,
    modelName: 'organisationUserModel',
    seeds: organisationUserSeeds,
  });

  await seederPerModel({
    model: RoleModel,
    modelName: 'roleModel',
    seeds: roleSeeds,
  });

  await seederPerModel({
    model: UserModel,
    modelName: 'userModel',
    seeds: userSeeds,
  });

  await seederPerModel({
    model: UserSessionModel,
    modelName: 'userSessionModel',
    seeds: userSessionSeeds,
  });

  await seederPerModel({
    model: UserTypeModel,
    modelName: 'userTypeModel',
    seeds: userTypeSeeds,
  });
};
