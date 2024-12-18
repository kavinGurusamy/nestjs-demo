import { AadAdminRoleGuard } from './aad-admin-role.guard';

describe('AadAdminRoleGuard', () => {
  it('should be defined', () => {
    expect(new AadAdminRoleGuard()).toBeDefined();
  });
});
