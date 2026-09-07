---
sidebar_position: 2
---

# Manage Users

## Contents

- [Manage Users](#manage-users)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [User administration overview](#user-administration-overview)
    - [Add a user](#add-a-user)
    - [Edit a user](#edit-a-user)
    - [Deactivate a user](#deactivate-a-user)
    - [Delete a user](#delete-a-user)
  - [Frequently Asked Questions](#frequently-asked-questions)
    - [Should I deactivate or delete a user?](#should-i-deactivate-or-delete-a-user)
    - [Can a deactivated user sign in?](#can-a-deactivated-user-sign-in)
  - [Troubleshooting](#troubleshooting)
    - [The user cannot sign in](#the-user-cannot-sign-in)
    - [I cannot update a user](#i-cannot-update-a-user)
  - [Best Practices](#best-practices)

## Introduction

Use Verve administration tools to manage the people who can access your organization. This quick start guide explains how to add users, update account details, deactivate accounts, and remove users when necessary.

## Prerequisites

- Sign in to Verve with an administrator account.
- Confirm the user's name and username before creating the account.
- Confirm that the user should have access to Verve before you activate the account.

## User administration overview

### Add a user

1. Open the administration panel.
2. Select **Users**.
3. Select **Add user**.
4. Enter the user's account details.
5. Save the new user.

The user account is created and can be used according to its assigned access.

Capture the account details before saving:

```yaml
name: ""
username: ""
account_status: active
assigned_role: ""
projects: []
```

### Edit a user

1. Open the administration panel.
2. Select **Users**.
3. Select the user you want to update.
4. Change the account details.
5. Save your changes.

The updated details apply to the user's account.

### Deactivate a user

1. Open the administration panel.
2. Select **Users**.
3. Select the user you want to deactivate.
4. Choose **Deactivate**.
5. Confirm the action.

The user can no longer access Verve while the account is inactive.

### Delete a user

1. Open the administration panel.
2. Select **Users**.
3. Select the user you want to remove.
4. Choose **Delete**.
5. Confirm the action.

The user is removed from Verve. Delete an account only when you no longer need its record.

For role and project access after creating an account, see [Manage Roles](manage-roles.md).

> [!WARNING]
> Deactivate an account when access may need to be restored. Delete it only when the user record is no longer needed.

## Frequently Asked Questions

### Should I deactivate or delete a user?

Deactivate an account when access may need to be restored later. Delete an account when you no longer need the user record.

### Can a deactivated user sign in?

No. A deactivated account cannot access Verve until an administrator activates it again.

## Troubleshooting

### The user cannot sign in

Confirm that the username is correct and that the account is active. If the problem continues, contact an administrator.

### I cannot update a user

Confirm that you are signed in with an administrator account and that you selected **Save** after changing the account details.

## Best Practices

- Review the user list regularly and deactivate accounts that no longer need access.
- Use clear, consistent account details so administrators can identify users easily.
- Confirm account changes with the user when the change affects sign-in access.
