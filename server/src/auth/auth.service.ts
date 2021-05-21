import { Injectable } from '@nestjs/common'
import { PasswordService } from './password.service'
// @ts-ignore
// eslint-disable-next-line
import { UserService } from '../user/user.service'
import { UserInfo } from './UserInfo'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findUnique({
      where: { username }
    })
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { role } = user
      // 添加 roles 是为了配合 ACL 权限列表, 必要有的字段
      return { username, role, roles: [role] }
    }
    return null
  }
}
